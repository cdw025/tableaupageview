var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/NoActivityDashboard', function(req, res, next) {
  res.render('NoActivityDashboard', { title: 'Express' });
});

router.get('/NoActivityDashboard2', function(req, res, next) {
  res.render('NoActivityDashboard2', { title: 'Express' });
});
router.get('/NoActivityDashboard3', function(req, res, next) {
  res.render('NoActivityDashboard3', { title: 'Express' });
});
router.get('/DryCargoNoActivity', function(req, res, next) {
  res.render('DryCargoNoActivity', { title: 'Express' });
});
router.get('/TurnTimeDashboard', function(req, res, next) {
  res.render('TurnTimeDashboard', { title: 'Express' });
});
router.get('/BRCairoDashboard', function(req, res, next) {
  res.render('BRCairoDashboard', { title: 'Express' });
});
router.get('/BRHoustonDashboard', function(req, res, next) {
  res.render('BRHoustonDashboard', { title: 'Express' });
});
router.get('/CairoGTDashboard', function(req, res, next) {
  res.render('CairoGTDashboard', { title: 'Express' });
});
router.get('/ChanBRDashboard', function(req, res, next) {
  res.render('ChanBRDashboard', { title: 'Express' });
});
router.get('/OOSDaysDashboard', function(req, res, next) {
  res.render('OOSDaysDashboard', { title: 'Express' });
});
router.get('/Cleaning30days', function(req, res, next) {
  res.render('Cleaning30days', { title: 'Express' });
});
module.exports = router;
