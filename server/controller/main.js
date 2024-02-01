const Score = require("../models/main");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Get all employee scores
exports.getEmployeeScores = catchAsyncErrors(async (req, res, next) => {
  const employeeScore = await Score.find();

  res.status(200).json({
    success: true,
    data: employeeScore,
    count: employeeScore.length,
  });
});
