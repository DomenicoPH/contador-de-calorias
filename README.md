# Contador de Calorías
[ Demo site ](https://gno-calories-counter.netlify.app/)

Aplicación web desarrollada con **React + Vite + TypeScript** que permite registrar y gestionar actividades diarias relacionadas con la alimentación y el ejercicio, mostrando un balance total de calorías.

## Funcionalidad

La app permite al usuario:

- Registrar **comidas ingeridas** (calorías positivas).
- Registrar **ejercicios realizados** (calorías negativas).
- Visualizar cada actividad con su valor calórico.
- Calcular automáticamente el **total de calorías**, teniendo en cuenta:
  
  > Calorías ingeridas − calorías quemadas

- **Editar** y **eliminar** actividades individuales.
- **Reiniciar** completamente la aplicación.
- Persistir los datos usando **localStorage**, manteniendo la información entre recargas.

## Arquitectura y estado

- Gestión de estado global mediante **useReducer**.
- Tipado estricto con **TypeScript**.
- Generación de identificadores únicos con **uuid**.

## UI y estilos

- Estilizado con **Tailwind CSS**.
- Uso de **Heroicons** para iconografía moderna y consistente.
- Diseño responsive y limpio.

## Tecnologías utilizadas

- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Heroicons**
- **uuid**

## Scripts disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Compila la aplicación para producción
npm run preview  # Previsualiza el build
npm run lint     # Ejecuta ESLint
```

## Licencia

Este proyecto es de uso libre con fines educativos y demostrativos.

---

**Domenico Pagano <dpaganoh@gmail.com>**  

Desarrollado como proyecto de práctica y portfolio frontend.  
💼 [Domenico Pagano Portafolio](https://portfolio-gnomono.vercel.app/)