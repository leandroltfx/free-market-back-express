import express from 'express';

const indexRoutes = (app) => {
    app.route('/').get((req, res) => { res.status(200).send('API Free Market works!') });
};

export default indexRoutes;