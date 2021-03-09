# Pandemia Chile

<p align="center">
    <img src="./images/logo.png" alt="pandemia chile logo" width="250" height="250">
</p>

Pandemia Chile es una aplicación para conocer la situación comunal del plan [Paso a Paso ](https://www.gob.cl/coronavirus/pasoapaso/) según la comuna en donde te encuentres. Se utiliza la información subida al repositorio [MinCiencia](https://github.com/MinCiencia/Datos-COVID19) que es recolectada por el proyecto [pandemia-chile-data](https://github.com/Josel95/pandemia-chile-data).

<p align="center">
    <img src="./images/Screenshot_1.jpg" alt="pandemia chile logo" width="250">
    <img src="./images/Screenshot_2.jpg" alt="pandemia chile logo" width="250">
    <img src="./images/Screenshot_3.jpg" alt="pandemia chile logo" width="250">
</p>

## Instalación

Esta aplicación es desarrollada utilizando [React Native](https://reactnative.dev/).

Se debe realizar la configuración del ambiente especificado en la [documentación de react native](https://reactnative.dev/docs/environment-setup).

Una vez clonado el repositorio debes instalar las dependencias como se indica a continuación:

```bash
yarn install
```

Para iniciar el proyecto simplemente debes ejecutar:

```bash
npm run android
```

## Credenciales

Esta aplicación hace uso de firebase y la api geocoding de google, para utilizar estas apis se deben proveer ciertas credenciales. Estas credenciales al ser de caracter privado deben estar presentes en el archivo .gitignore. A continuación se indica donde debe estar presentes estas credenciales.

#### `firebase`
Para la configuración de credenciales de firebase se debe seguir la documentación para agregar [firebase al proyecto de android](https://firebase.google.com/docs/android/setup?hl=es-419). 

#### `src/secrets/geocoding.json`
En este archivo se debe especificar el token para utilizar la api de Google Geocoding. Este token lo puedes encontrar en tu panel de administración de GCP vinculado con tu proyecto de firebase. Tiene el siguiente formato:

```json
{
    "key": "TU API KEY"
}
```

## Contribuciones
Este proyecto es desarrollado en mis tiempos libres y solo por hobby. De todas maneras si deseas colaborar bienvenido sea.

## License
[MIT](https://choosealicense.com/licenses/mit/)