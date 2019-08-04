import config from '@/config/config'

const getAuthToken = () => localStorage.getItem('authtoken');

export const movieService = {
    data () {
        return {
          movies: []
        }
    },
    created() {
        this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`;

        this.$http.get(`appdata/${config.appKey}/movies`)
        .then(({data}) => this.movies = data);
    } 
};