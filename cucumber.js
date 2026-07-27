module.exports = {
  default: {
    require: ['steps/**/*.js', 'hooks/**/*.js'],
    paths: ['features/**/*.feature'],
    format: ['progress-bar', 'html:rapport-execution.html'],
    publishQuiet: true
  }
}