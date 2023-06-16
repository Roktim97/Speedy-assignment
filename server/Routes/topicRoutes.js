const router = require('express').Router();

const Topic = require('../models/topics');

router.post('/addTopics', async(req,res)=>{
    try {
        const addTopic = new Topic(req.body)
        await addTopic.save()
        res.json(addTopic)
    } catch (error) {
        console.log(error.message)
        res.json({status: false})
    }
})

router.get('/all', async(req,res)=>{
    try {
        const data = await Topic.find()
        res.json(data)
    } catch (error) {
        console.log(error.message)
        res.json({status:false})
    }
})

router.get('/mission', async(req,res)=>{
    try {
        const data = await Topic.find({category:"Mission"})
        if(data){
            res.json(data)
        }
        else res.json({message: "No topics"})
        
    } catch (error) {
        console.log(error.message)
        res.json({status:false})
    }
})

router.get('/icp', async(req,res)=>{
    try {
        const data = await Topic.find({category:"ICP"})
        if(data){
            res.json(data)
        }
        else res.json({message: "No topics"})
        
    } catch (error) {
        console.log(error.message)
        res.json({status:false})
    }
})

router.get('/product', async(req,res)=>{
    try {
        const data = await Topic.find({category:"Product"})
        if(data){
            res.json(data)
        }
        else res.json({message: "No topics"})
        
    } catch (error) {
        console.log(error.message)
        res.json({status:false})
    }
})

router.get('/custom', async(req,res)=>{
    try {
        const data = await Topic.find({category:{ $exists: false }})
        if(data){
            res.json(data)
        }
        else res.json({message: "No topics"})
        
    } catch (error) {
        console.log(error.message)
        res.json({status:false})
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Topic.findByIdAndDelete(id);
      res.json({ message: "Topic deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res.json({ status: false, error: error.message });
    }
  });
  

module.exports = router