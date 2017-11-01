module.exports = (app, mongoose) => {
	const Paciente = mongoose.model('pacientes');

	app.get('/api/pacientes/prueba', (req, res) => {
		res.send('Las rutas funcionan correctamente');
	});

	app.get('/api/pacientes', async (req, res) => {
		const pacientes = await Paciente.find();
		try {
			res.send(pacientes);
		} catch (err) {
			res.status(500).send(err);
		}
	});

	app.post('/api/pacientes', async (req, res) => {
		try {
			const {
				apellido,
				celular,
				fechaNacimiento,
				mail,
				nombre,
				nroDocumento,
				obraSocial,
				sexo,
				telefono,
				direccion
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
			});
			await paciente.save();
			res.send(paciente);
		} catch (err) {
			console.log(err);
			res.status(500).send(err);
		}
	});

	app.delete('/api/pacientes/:id', async (req, res) => {
		try {
			const pac = await Paciente.findByIdAndRemove(req.params.id);
			const pacientes = await Paciente.find();
			res.send(pacientes);
		} catch (err) {
			res.status(500).send(err);
		}
	});
};
