const router = require('express').Router();
const User = require('../Models/userModel');
const Drug = require('../Models/drugModel');

router.get('/',(req,res) => {
    res.send('this is a user route')
})
router.post('/',async(req,res) => {
    let {name,email,password} = req.body;
    let newUser = new User({name,email,password});
    await newUser.save();
    res.send(newUser);
})

router.delete('/:id',(req,res) => {
    let {id} = req.params;
    let deleteUser = User.findByIdAndDelete(id,(err,docs) => {
        if(err) {
            res.send(err)
        } else {
            res.send(docs);
        }
    })
})

router.put('/:id/drugs',async(req,res) => {
    let {id} = req.params;
    let {name} = req.body;
    let newDrug = new Drug({name});
    await newDrug.save();

    let findUser = User.findById(id,(err,doc) => {
        if(err) {
            res.send(err)
        } else {
            doc.drugs.push(newDrug);
            doc.save();
            res.send(doc);
        }
        
    })
})

router.get('/:id/drugs',async(req,res) => {
    // get drugs that user takes
    let {id} = req.params;
    const userDrugs = await User.findById(id).populate('drugs');
    res.send(userDrugs);
})


module.exports = router;