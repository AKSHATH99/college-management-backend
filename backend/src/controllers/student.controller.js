import asyncHandler from "../utils/asyncHandler.js";
import apiError, { ApiError } from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import { Student } from "../models/student.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import mongoose from "mongoose";

//----------------------STUDENT REGISTRATION--------------------------------

const studentRegistration = asyncHandler(async (req, res) => {
  const {
    Name,
    Gender,
    Age,
    DOB,
    place,
    Phone,
    Email,
    parentPH,
    Regno,
    Dept,
    Course,
    CourseID,
    AdmissionDate,
  } = req.body;


  if (
    [
      Name,
      Gender,
      Age,
      DOB,
      place,
      Phone,
      Email,
      parentPH,
      Regno,
      Dept,
      Course,
      CourseID,
      AdmissionDate,
    ].some((field) => field?.trim() === "")
  ) {
    throw new apiError(400, "ALL FIELDS ARE REQUIRED ");
  }

  const existingUser = await Student.findOne({ Name: Name, Email: Email });

  if(existingUser){
    throw new ApiError(400 ,"STUDENT WITH THIS CREDENTIALS ALREADY EXIST")
  }








});
