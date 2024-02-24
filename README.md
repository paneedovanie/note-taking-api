# Note Taking API

The Note Taking API is a server-side application designed to manage notes. It offers endpoints for creating, retrieving, updating, and deleting notes.

### API endpoints

1. `POST /notes` - create a new note.
    ```
    Payload:
    {
        "title": string;
        "body": string
    }
    ```
2. `GET /notes` - retrieve all notes.
3. `GET /notes/:id` - retrieve a specific note by id.
4. `PUT /notes/:id` - update a specific note.
    ```
    Payload:
    {
        "title": string;
        "body": string
    }
    ```
5. `DELETE /notes/:id` - delete a specific note.

### Dependecies
1. [express](https://www.npmjs.com/package/express) - Used to create the API server
2. [body-parser](https://www.npmjs.com/package/body-parser) - Used to transform json payload to body request
3. [uuid](https://www.npmjs.com/package/uuid) - Used to generate random id
4. [zod](https://www.npmjs.com/package/zod) - Used to create validation schema

### Usage

##### For production

1. Install the dependecies using the command:
    ```
    npm install 
    ```
2. Build the production files:

    ```
    npm run build 
    ```
3. Start the server using the command:

    ```
    npm start 
    ```

##### For development

1. Install the dependecies using the command:
    ```
    npm install 
    ```
2. Start the server using the command:
    ```
    npm serve 
    ```
## Assumptions
1. Can be integrated to any app which supports accessing the internet
2. This application is scalable because it uses a modular structure