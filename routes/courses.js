const { response } = require("express");
const ex = require("express");
const { route } = require("express/lib/application");
const Course = require("../models/course");
const router = ex.Router();

//creating the routers 

//Create Courses

router.post("/", async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

//Read all the courses

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.json(err);
  }
});

//Read single courses

router.get("/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const c = await Course.findById(courseId);
    res.json(c);
  } catch(error) {
    res.json(error);
  }
});

//update course

router.put("/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const course = await Course.updateOne(
      {
        _id: courseId,
      },
      req.body
    );
        
    res.json(course);
  } catch (error) {
    res.json(error);
  }
});

//delete Course

router.delete("/:courseId", async (req, res) => {
  try {
    await Course.deleteOne(
      { 
        _id: req.params.courseId 
      });
    res.status(200).json({
      message: "deleted sucessfully"
    });
  } catch (error) {
    res.json(error);
  }
});


module.exports = router;