<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo 
__1.__ Clonar el repositorio

__2.__ Ejecutar
```
yarn install
```
__3.__ Tener nest CLI instalado
```
npm i -g @nest/cli
```  
__4.__ Levantar la base de datos
```
docker-compose up -d
```
__5.__ Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

__6.__ Llenar las variables de entorno definidas en el  ````.env```

__7.__ Ejecutar la aplicación en dev:
```
yarn start:dev
```

__8.__ Reconstruir la DB con el seed 
```
http://localhost:3000/api/v2/seed
```


## Stack usado
* MongoDB
* Nest
