# [EN 🇬🇧]
### Technology
- React (v18)
- Typescript (v5)
- Sass 
- vite tool (https://vitejs.dev/)


### Scripts
- `yarn dev`: runs the server in development mode
- `yarn build`: checks typescript and create a production bundle
- `yarn lint`: eslint check

## Challenge structure
The challenge has mainly 3 blocks:
- Context (provider): `src/context/SearchContext.ts`: `src/context/SearchContext.ts`: `src/context/SearchContext.ts`.
- SearchBar: `src/components/SearchBar/SearchBar.tsx`.
  - countrySelect: `src/components/components/forms/CountrySelect/CountrySelect.tsx`
  - versionSelect: `src/components/forms/VersionSelect/VersionSelect.tsx`
  - input: `src/components/forms/InputForm/InputForm.tsx`
 - result container: `src/components/SearchResults/SearchResults.tsx`
   - ResultCard: `src/components/ResultCard/ResultCard.tsx`

### Explanation
I have decided to do the challenge in **React** with typescript because of its ease to make dynamic and faster SPAs. I think it is essential to implement **Typescript** for all javascript projects.

I used the _React Context_, where the search parameters are stored for future scalability. For this challenge I didn't see the need to implement libraries like _Redux_.

You can add as many search fields as you want, just add them to the `Object` of the context, which now contains:
- `country`
- `version`
- `textSearch`

For the country search, I used the [react-select ](https://github.com/JedWatson/react-select/tree/master) library. It's easy to implement and customize.

For text search, I added a hook ([use-debounce](https://github.com/xnimorz/use-debounce#readme)), which adds a _delay_ of `n` seconds when the user types and doesn't execute immediate searches until the user has stopped typing.
This is to improve performance if the search data is very large in the future.
  

# [ES 🇪🇸]
### Teconología escogida
- React (v18)
- Typescript (v5)
- Sass 
- [vite tool](https://vitejs.dev/)


### Scripts
- `yarn dev`: abre el servidor en modo desarrollo
- `yarn build`: checkea typescript y crea un paquete para producción
- `yarn lint`: eslint check

## Estructura de la prueba
La prueba tiene principalmente 3 bloques:
- el Context (provider): `src/context/SearchContext.ts`
- Barra de búsqueda: `src/components/SearchBar/SearchBar.tsx`
  - countrySelect: `src/components/forms/CountrySelect/CountrySelect.tsx`
  - versionSelect: `src/components/forms/VersionSelect/VersionSelect.tsx`
  - input: `src/components/forms/InputForm/InputForm.tsx`
 - contenedor de resultados: `src/components/SearchResults/SearchResults.tsx`
   - ResultCard: `src/components/ResultCard/ResultCard.tsx`

### Explicación de la prueba
He decidido hacer la prueba en react con typescript por su facilidad para hacer SPA dinámicas y rápidas. Creo que es esencial la implementación de Typescript para todos los proyectos de javascript.

He utlizado el Context de React, donde se almancenan los parámetros de búsqueda para una mayor escalabilidad en el futuro. _Para este caso no veía necsario la implementación de librerías como Redux._

Se pueden añadir tantos campos de búsqueda como se quiera, tan solo hay que añadirlos al `Object`del context, el cual ahora contiene:
- `country`
- `version`
- `textSearch`

Para la búsqueda de páis, he utilzado la librería [react-select](https://github.com/JedWatson/react-select/tree/master). Fácil de implementear y personalizar

Para la búsqueda de texto, he añadido un hook ([use-debounce](https://github.com/xnimorz/use-debounce#readme)), que añade un _delay_ de `n` segundos cuando el usuario escribe y no ejecutar búsquedas inmediatas hasta que el usuario no haya dejado de escribir. Esto es para mejorar la performance si los datos de búsqueda son muy grandes en un futuro