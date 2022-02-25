import * as skillDb from '../data/skill-db.js'

function index (req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
      date: req.date,
    })
  })
}

function show(req, res){
  skillDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error,
    })
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  skillDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  console.log(req.params.id)
  skillDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect('/skills')
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
}