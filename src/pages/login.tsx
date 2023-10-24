import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Input,
	CardFooter,
	Button,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
	email: yup.string().email("El ").required("El email es requerido"),
	password: yup
		.string()
		.min(6, "hola")
		.max(20)
		.required("La contraseña es requerida"),
});

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = handleSubmit((data) => console.log(data));
	return (
		<div className="justify-center items-center flex flex-col space-y-12 h-full">
			<h1>Bienes Raíces</h1>
			<h3>Iniciar sesión</h3>
			<form onSubmit={onSubmit}>
				<Card className="py-4 w-[500px]">
					<CardBody className="overflow-visible space-y-4">
						<Input
							label="Correo electrónico"
							placeholder="Correo electrónico"
							{...register("email")}
							errorMessage={errors.email?.message}
							isInvalid={errors.email ? true : false}
						/>
						<Input
							label="Contraseña"
							placeholder="Contraseña"
							type="password"
							{...register("password")}
							errorMessage={errors.password?.message}
							isInvalid={errors.password ? true : false}
						/>
						<div className="justify-between flex">
							<a href="#">¿No tienes cuenta?</a>
							<a href="#">¿Olvidaste tu contraseña?</a>
						</div>
					</CardBody>
					<CardFooter>
						<Button className="w-full" color="primary" type="submit">
							Iniciar sesión
						</Button>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}

export default App;
