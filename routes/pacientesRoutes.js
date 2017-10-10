module.exports = (app, mongoose) => {
  const Paciente = mongoose.model('pacientes');
  app.get('/api/pacientes/prueba', (req, res) => {
    res.send('Las rutas funcionan correctamente');
  });

  app.post('/api/pacientes', async (req, res) => {
    try {
      const {
        nroDocumento,
        nombre,
        apellido,
        fechaNacimiento,
        telefono,
        celular,
        mail,
        direccion,
        sexo,
        obraSocial
      } = req.body;
      const paciente = await new Paciente({
        nroDocumento,
        nombre,
        apellido,
        fechaNacimiento,
        telefono,
        celular,
        mail,
        direccion,
        sexo,
        obraSocial
      }).save();

      res.send(`Paciente generado: ${paciente}`);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};
