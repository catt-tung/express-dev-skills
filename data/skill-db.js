const skills = [
  {text: 'HTML', yes: true, _id: 101},
  {text: 'CSS', yes: true, _id: 102},
  {text: 'JavaScript', yes: true, _id: 103},
  {text: 'Git', yes: true, _id: 104},
  {text: 'GitHub', yes: true, _id: 105},
  {text: 'Ruby on Rails', yes: false, _id: 201},
  {text: 'Big O Notation', yes: false, _id: 202},
  {text: 'SQL', yes: false, _id: 203},
  {text: 'MongoDB', yes: false, _id: 204},
  {text: 'Bootstrap', yes: true, _id: 205},
  {text: 'Authentication', yes: false, _id: 206},
  {text: 'React, Angular, Ember', yes: false, _id: 301},
  {text: 'Package Managers', yes: false, _id: 302},
  {text: 'AJAX', yes: false, _id: 401},
  {text: 'Third-party APIs', yes: false, _id: 402},
  {text: 'Token-based authentication', yes: false, _id: 403},
  {text: 'Linked lists, stacks and queues, sets, and trees', yes: false, _id: 404},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback (null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 100000
  skill.yes = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try {
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if(!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
      return callback(error, null)
  }
}

export {
  find,
  findById,
  create,
  findByIdAndDelete,
}