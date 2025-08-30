const express = require('express');
const router = express.Router();

const employee = require('../models/employee');

router.get('/', async (req, res) => {
    try {
        const empData = await employee.find();
        res.json(empData);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const SingleEmpData = await employee.findById(req.params.id);
        res.status(201).json(SingleEmpData);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.post('/addEmployee', async (req, res) => {
    try {
        const AddEmployee = await employee.create(req.body);
        res.status(201).json(AddEmployee);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.put('/editEmployee/:id', async (req, res) => {
    try {
        const EditEmployee = await employee.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(EditEmployee);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.delete('/deleteEmployee/:id', async (req, res) => {
    try {
        const deleteEmployee = await employee.findByIdAndUpdate(req.params.id);
        res.json({message: "Data Deleted"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports  = router;