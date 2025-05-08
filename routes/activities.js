const express= require('express');
const router= express.Router();
const Activity= require('../models/Activity');

router.get('/',async(req,res)=>{
    try {
        const activities= await Activity.find().sort({dateTime:1});
        res.json(activities);
    } catch (error) {
        res.status(500).json({message:'Server error'});
    }
})

router.post('/',async(req,res)=>{
    const {title,description,location,dateTime} = req.body;
    try {
        const activity= new Activity({
            title,
            description,
            location,
            dateTime
        });
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
});

module.exports= router;