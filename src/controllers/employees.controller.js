const employeeCtrl = {};

const Employee = require("../models/employee");

employeeCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};
employeeCtrl.createEmployee = async(req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();

    res.send({ message: 'employee Created' });
};

employeeCtrl.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeeCtrl.editEmployee = async(req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'Employeed Update' });
};

employeeCtrl.deleteEmployee = async(req, res) => {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.json({ status: 'employee delete' })
};


module.exports = employeeCtrl;