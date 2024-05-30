/Role base architecture here all the models of both flight crud and search will be in same folder
    - src//
        index.js // severs--->this folder contains all the server code so that tests code and other such stuff 
                    which is not necessary for server to run each time dont increase the load on server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    -tests/ [later]