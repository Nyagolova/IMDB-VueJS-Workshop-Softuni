import config from '@/config/config'

const authString = btoa(`${config.appKey}:${config.appSecret}`);


const loginUser = user => {
    localStorage.setItem('username', user.username);
    localStorage.setItem('authtoken', user.authtoken);

    return user;
};

export const authService = {
    data() {
        return {
            authtoken: localStorage.getItem('authtoken')
        }
    },
    computed: {
        isAuthenticated() {
            return  this.authtoken !== null;
        }
    },
    created() {
        this.$root.$on('logged-in', authtoken => this.authtoken = authtoken)
    }
};

export const authenticate = {
    methods: {
        register(username, password) {
            return this.authenticate(`/user/${config.appKey}`, username, password);
        },
        login(username, password) {
            return this.authenticate(`/user/${config.appKey}/login`, username, password);

            //{data} = res.data
        },
        authenticate (url, username, password) {
            return this.$http.post(url, {
                username,
                password          
            }).then(({data}) => loginUser({
                username: data.username,
                authtoken: data._kmd.authtoken
            }) );
        }
    },
    created() {
        this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`;
    }
};

