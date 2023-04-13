import axios from 'axios';

export default {
  data() {
    return {
      type: 'user',
      auth: JSON.stringify({
        type: "token",
        token: ""
      }),
      data: JSON.stringify({
        user_id: 1
      })
    };
  },
  methods: {
    handleSubmit() {
      // Call the get_responds method when the form is submitted
      this.get_responds();

      // Do something with email and password values
    },
    get_responds() {
      axios.get('/api/home')
        .then((response) => {
          console.log("Axios Response: ", response);
          console.log("Hallo");
        })
        .catch(function (error) {
          console.error("Axios Error", error);
        });
    }
  }
};