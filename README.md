# Note Taking API

### Instructions to use the API

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