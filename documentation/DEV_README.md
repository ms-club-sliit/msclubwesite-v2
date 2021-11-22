> Please read this documentation before you start implementation

## Project Structure :spiral_notepad:

### :open_file_folder: `public` 
This folder contain the static files. 
| File Name | Description |
| --------- | ----------- |
| :page_facing_up: index.html | Root html file of the application |
| :page_facing_up: favicon.ico | MS Club logo icon for browser tab image |
| :file_folder: assets | Contains all the static images and icons for the application |
> When you want to add images to the application, please add those imagest to the `/assets/` :file_folder:. To import the images, please use following format. Do not import images as file into the React components.

E.g.: Import MS Club logo to the image tag. \
`<img src="/assets/ms-club-logo.png" alt="logo" />`

### :open_file_folder: `src` 
This folder contain all the React components and pages that are renderd to the browser. The `src` :open_file_folder: include, \
| File/Folder Name | Description |
| ---------------- | ----------- |
| :file_folder: **api** | Implement all the API calling in this folder |
| :file_folder: assets | This folder contains fonts and images (Static) |
| :file_folder: components | Implement UI components in this folder. |
| :file_folder: constants | Declare all the constants in this folder's `index.ts` file. |
| :file_folder: data | Add all the data files (`.json`) files to this folder. |
| :file_folder: interfaces | Declare all the component interfaces in this folder. |
| :file_folder: pages | Contains main pages in the application. |
| :file_folder: routes | Declare page routes in this folder. |
| :file_folder: styles | Implement style files in this folder and then import that files into the `App.scss` file. |
| :page_facing_up: App.tsx | Contains the page route component |
| :page_facing_up: index.tsx | Starting point of the application |
| :page_facing_up: reportWebVitals.ts | Measure real life performance of the application |
| :page_facing_up: setupTests.ts | |

## IMPORTANT NOTES :pencil2:
### Install Dependencies
Please you `yarn` to install the dependencies to the application. <br>
Example: *Install `axios` to the application.*
```
$ yarn add axios
``` 
Or if you want to install all the dependencies, use this command.
```
$ yarn install
```

### Start the Application
Use following command to start the application. 
``` 
$ yarn start 
```

### Implement UI Components
When you start implement a UI component, create a folder by using the name of the component. Then create an `index.tsx` :page_facing_up: to implement the UI logic. 
Please go through the following example. 
> Implement a `card` component. (This example already there in the codebase. Please take a :eyes:). The same steps are applied to the `pages` implementation.
1. Create a folder called `card` inside the `components` :open_file_folder:
2. Create an `index.tsx` file inside the `card` folder.
3. Implement your UI.
4. Export that component as default.
5. Go to the `/components/index.tsx` file.
6. Import the `Card` component to the file.
7. Add that `Card` component to the `export` section.

### :art: Add Styling To UI
For the styling, this project use **SCSS (Sassy Cascading Styling Sheets)**. <br>
#### Declaring Colors
When you are going to apply some colors to the UI component, make sure the color that you are 
importing is already available in the `colors.scss` file. If it is available, please use that 
color variable. Do not declare seperate variable names for same color.<br>
:pencil2: *you can declare different name for same color only if it a necessary situation*
#### Responsive Breakpoints
In this application, we use small `scss` library to implement responsive breakpoints.<br>
:file_folder: `styles` &rarr; :page_facing_up: `breakpoint.scss` <br>
Use following template to add your responsive breakpoint logics. <br>
:pencil2: *The same template is available on `App.scss` file*
```
  @include media("<=phone") {}

  @include media(">=phone", '<tablet') {}

  @include media('>=tablet', '<smalldesktop') {}

  @include media('>=smalldesktop', '<desktop') {}

  @include media(">=desktop", '<largedesktop') {}

  @include media('>=largedesktop') {
```
### :framed_picture: Image Import & Export
:warning: *This is only for static images*
| Import | Export |
| ------ | ------ |
| To import images to the application, you should first import images to `public/assets` folder. <br> :pencil2: **Do not import images to `src/assets` folder. `src/assets` folder only contains the font families that are using in the application.** | To export/ use the images insite a component, you can directly access the  `public/assets` folder in your `img` tag. <br>*Please go through the following example*  <br> **MS Club logo** &rarr; **`public/assets/ms_club_logo.png`** <br> To access MS Club logo in your component you can use an import like this <br>`<img src="/assets/ms_club_logo.png" alt="ms-club-logo">` |

### :whale: Using Docker 
#### Build the Docker Image
You can create a Docker image using this command. For more info go to the `Dockerfile`.
```
docker build -t msclubsite:v2.0.0 .
```
#### Create & Run Docker Container :package:
Use following command to run the Docker image. 
```
docker run -p 9090:3000 -d msclubsite:v2.0.0 
```
This command will run the Docker container. When it starts running, open your web browser and paste this url.
```
localhost:9090
```


