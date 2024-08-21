const Task = require("../models/taskModel.js");
const app_constants = require("../constant/app.json");
const sendEmail = require("../helper/sendEmail.js");

exports.addTask = async (data) => {
    const { title,description,status } = data;
    
    const description_data = description ? description : "";
    const status_data = status ? status : "";


  
    const upload_task = await Task.create({
      title,
      description: description_data,
      status: status_data
    });
    
    await sendEmail();

    if (upload_task) {
      return {
        success: 1,
        status: app_constants.SUCCESS,
        message: "task uploaded successfully",
        result: upload_task,
      };
    }
  
    return {
      success: 0,
      status: app_constants.INTERNAL_SERVER_ERROR,
      message: "internal server error",
      result: {},
    };
};

exports.getAllTask = async () => {

    const get_all_task = await Task.find();
    if (get_all_task) {
      return {
        success: 1,
        status: app_constants.SUCCESS,
        message: "task uploaded successfully",
        total_task: get_all_task.length,
        result: get_all_task,
      };
    }
  
    return {
      success: 0,
      status: app_constants.INTERNAL_SERVER_ERROR,
      message: "internal server error",
      result: {},
    };
};

exports.getSingleTask = async (data) => {

    const {id} = data;

    const task_data = await Task.findOne({_id:id});
    if(!task_data) {
        return {
            success: 0,
            status: app_constants.BAD_REQUEST,
            message: "Task dose not exist",
            result: {},
          };
    }

    if (task_data) {
      return {
        success: 1,
        status: app_constants.SUCCESS,
        message: "task get successfully",
        result: task_data,
      };
    }
  
    return {
      success: 0,
      status: app_constants.INTERNAL_SERVER_ERROR,
      message: "internal server error",
      result: {},
    };
};

exports.updateTask = async (data) => {
    const { id } = data;
    const task_data = await Task.findOne({_id:id});
    if(!task_data) {
        return {
            success: 0,
            status: app_constants.BAD_REQUEST,
            message: "Task dose not exist",
            result: {},
          };
    }

    const title = data.title?data.title:task_data.title;
    const description = data.description?data.description:task_data.description;
    const status = data.status?data.status:task_data.status;

     const updateTask = await Task.updateOne(
    {_id:id},
    {
      title,
      description,
      status,
    }
  )

  if(!updateTask){
    return {
      success: 0,
      status: app_constants.BAD_REQUEST,
      message: "task dosen't update ",
      result:{},
    };
  }

  

  return {
    success: 1,
    status: app_constants.SUCCESS,
    message: "task updated successfully!",
    updateTask,
  };
};

exports.deleteTask = async (data) => {
    const { id } = data;
    const task_data = await Task.findOne({_id:id});
    if(!task_data) {
        return {
            success: 0,
            status: app_constants.BAD_REQUEST,
            message: "Task dose not exist",
            result: {},
          };
    }

 
     const deleteTask = await Task.deleteOne({_id:id})

  if(!deleteTask){
    return {
      success: 0,
      status: app_constants.BAD_REQUEST,
      message: "task dosen't delete ",
      result:{},
    };
  }

  

  return {
    success: 1,
    status: app_constants.SUCCESS,
    message: "task deleted successfully!",
    result:{},
  };
};







