const userServices = require("../services/taskServices.js");
const validationHelper = require("../helpers/validation.js");
const app_constants = require("../constant/app.json");

exports.addTask = async (req, res) => {
    try {
      const required_fields = ["title"];
  
      const validation = validationHelper.validation(required_fields, req.body);
      if (Object.keys(validation).length) {
        return res.json({
          success: 0,
          status_code: app_constants.BAD_REQUEST,
          message: validation,
        });
      }

      const add_task = await userServices.addTask(req.body);
      return res.json(add_task);
    } catch (err) {
      return res.json({
        success: 0,
        status_code: app_constants.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
};

exports.getAllTask = async (req, res) => {
    try {
      const add_user = await userServices.getAllTask();
      return res.json(add_user);
    } catch (err) {
      return res.json({
        success: 0,
        status_code: app_constants.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
};

exports.getSingleTask = async (req, res) => {
    try {
        const required_fields = ["id"];
        const validation = validationHelper.validation(required_fields, req.params);
        if (Object.keys(validation).length) {
          return res.json({
            success: 0,
            status_code: app_constants.BAD_REQUEST,
            message: validation,
          });
        }

      const add_user = await userServices.getSingleTask(req.params);
      return res.json(add_user);
    } catch (err) {
      return res.json({
        success: 0,
        status_code: app_constants.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
};

exports.updateTask = async (req, res) => {
    try {
      const required_fields = ["id"];
  
      const validation = validationHelper.validation(required_fields, req.body);

      if (Object.keys(validation).length) {
        return res.json({
          success: 0,
          status_code: app_constants.BAD_REQUEST,
          message: validation,
        });
      }

      const update_task = await userServices.updateTask(req.body);
      return res.json(update_task);
    } catch (err) {
      return res.json({
        success: 0,
        status_code: app_constants.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
};

exports.deleteTask = async (req, res) => {
    try {
      const required_fields = ["id"];
  
      const validation = validationHelper.validation(required_fields, req.params);

      if (Object.keys(validation).length) {
        return res.json({
          success: 0,
          status_code: app_constants.BAD_REQUEST,
          message: validation,
        });
      }

      const deleteTask = await userServices.deleteTask(req.params);
      return res.json(deleteTask);
    } catch (err) {
      return res.json({
        success: 0,
        status_code: app_constants.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
};