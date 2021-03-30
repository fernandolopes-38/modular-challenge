import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model }  from 'miragejs';
import { App } from './App';
import db from './db.json';
import { Project } from './types';

createServer({
  models: {
    project: Model
  },

  seeds(server) {
    server.db.loadData({
      projects: db.projects
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('projects', (schema, request) => {
      const { id_ne } = request.queryParams;
      return schema.db.projects.where((project: Project) => Number(project.id) !== Number(id_ne));
    })
    this.get('projects/:id', (schema, request) => {
      const { id } = request.params;
      return schema.db.projects.find(id);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
