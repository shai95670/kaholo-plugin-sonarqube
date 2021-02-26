const axios = require('axios');

// invoke test(), to run the tests
// this wrapper will only work if the user has a sonar qube server instance running,
// the user also needs to have a user for his sonar qube server
//test();
async function test() {
    const activeUsers = await getActiveUsers({
        sonarQubeServerUrl: 'http://localhost:9000',
        username: 'admin',
        password: '1234'
    });
    
    const project = await createProject({
        params: {
            name: 'test9',
            project: 'test9'
        }
    }, {
        sonarQubeServerUrl: "http://localhost:9000",
        username: 'admin',
        password: '1234'
    });

    console.log(activeUsers);
    console.log(project);
}

async function getActiveUsers(settings) {
    return await _makeRequest(_createGenericConfig('get', settings));
}

async function createProject(action, settings) {
    const config = _createGenericConfig('post', settings, action);
    config.params = action.params;
    return await _makeRequest(config);
}

function _createGenericConfig(method, settings, action = undefined) {
    const {
        sonarQubeServerUrl,
        username,
        password
    } = settings

    return {
        method,
        auth: {
            username,
            password
        },
        url: _createUrl(sonarQubeServerUrl, action)
    }
}

// if an action was passed to this function,
// then we can say that we are dealing with the proj end point
// im basing this on the test assignment that asks for two methods
// if we add more then two then this need to be refactord
function _createUrl(baseServerUrl, action) {
  const USERS_END_POINT = "api/users/search";
  const PROJECT_END_POINT = "api/projects/create";

  return action ? `${baseServerUrl}/${PROJECT_END_POINT}` : `${sonarQubeServerUrl}/${USERS_END_POINT}`
}

async function _makeRequest(config) {
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        // stack trace for the developer
        console.log(error.stack)
        return error.message;
    }
}

module.exports = {
    getActiveUsers: getActiveUsers,
    createProject: createProject
};