const routes =  require('next-routes')();


routes.add('/Campaigns/create', '/Campaigns/create').add('/Campaigns/:address','/Campaigns/view');
module.exports= routes;

