# Code-Challenge
Creación de API que muestra información  de un archivo json a través de endpoints. Unit Testing con  Jest, workflow y guía de estilos con ESLint

## Dependencias
| Dependecia | Función | 
| ------------- |:-------------:| 
|`jest`|Para ejecutar pruebas de unidad|
|`express`|Framework para crear servers|
|`ESLint`|Guia de estilos para arreglar el codigo y corregir algunos errores de estilos de código|
|`.github/workflows/test.yml`|Para Github Actions (Pruebas Automatizadas)|

## Diseño de la API
![Imagen1](https://github.com/LuceroLuciano/Code-Challenge/blob/main/img/diagramCodeChallenge1.png)

![Imagen2](https://github.com/LuceroLuciano/Code-Challenge/blob/main/img/diagramCodeChallenge2.png)

## Consumiendo la API 
| Enpoint | Descipción |
|--------|:------------:|
|`http://localhost:3000/v1/visualpartners`|Obtiene todos los students los visualpartners con sus campos|
|`http://localhost:3000/v1/visualpartners/emails/true`|Obtiene todos los emails de los visualpartners que tienen certificacion|
|`http://localhost:3000/v1/visualpartners/students/500`|Obtiene los nombres de todos los visualpartners que tienen creditos mayor a 500|

### Primer endpoint `http://localhost:3000/v1/visualpartners`
![igm1](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/endpoint1.png)

![result1](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/resultEndpoint1.png)

![navegador1](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/navEndpoint1.png)

### Segundo edpoint `http://localhost:3000/v1/visualpartners/emails/true`
![img2](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/endpoint2.png)

![result2](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/resultEndpoint2.png)

![navegador2](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/navEndpoint2.png)

### Tercer endpoint `http://localhost:3000/v1/visualpartners/students/500`

![img3](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/endpoint3.png)

![result3](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/resultEndpoint3.png)

![navegador3](https://raw.githubusercontent.com/LuceroLuciano/Code-Challenge/main/img/navEndpoint3.png)

## Ejecución del proyecto en local
1. Hacer `fork` a este repo
2. Instalar las dependencias `npm install`
3. Ejecutar el siguiente comando `npm run server` para ver funcionar el proyecto
4. En el navegador ingrese los **endpoints** mendionados anteriormente, por ejemplo: `http://localhost:3000/v1/visualpartners`

### NOTA: Para este punto de ver el funcionamiento del proyecto, ya debe tener instalado `nodejs` y el gestor de paquetes `npm`, si aún no lo tiene instalado, revise el proceso de [instalación de nodejs](https://nodejs.org/es/)

De esta forma podra ver el funcionamiento de esta API. Si desa contribuir al proyecto, haga PR para aprender y mejorar juntxs creando comunidad. 
