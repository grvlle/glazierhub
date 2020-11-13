<template>
  <Form
    class="contact-form"
    :validation-schema="schema"
    @submit="sendEmail"
    v-slot="{ errors }"
    method="post"
  >
    <Field
      class="form-control form-control-sm text"
      type="text"
      placeholder="Enter full name"
      :class="{ 'is-invalid': errors.name }"
      name="name"
    />
    <div class="warning-text-input">{{ errors.name }}</div>
    <Field
      :class="{ 'is-invalid': errors.reply_to }"
      class="form-control form-control-sm input text"
      type="email"
      placeholder="Enter your email address"
      name="reply_to"
    />
    <div class="warning-text-input">{{ errors.reply_to }}</div>
    <Field
      class="form-control form-textarea form-control-sm text text-area-input"
      name="message"
      type="text"
      :class="{ 'is-invalid': errors.message }"
      placeholder="Type a message"
    />
    <button
    style="border: none; outline: none;"
      type="submit"
      class="btn-contact fancy-button bg-gradient1"
      @click="reset()"
    >
      <span style="border: none; outline: none;">SEND IT</span>
    </button>
  </Form>
</template>

<script>
import emailjs from "emailjs-com";
import { useToast } from "vue-toastification";
import { Field, Form } from "vee-validate";
import * as Yup from "yup";

export default {
  components: {
    Form,
    Field,
  },
  setup() {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      message: Yup.string().required("A message is required"),

      reply_to: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
    });

    // Get toast interface
    const toast = useToast();

    // const onSubmit = e => {
    //     // display form values on success
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(e, null, 4));
    //     this.sendEmail()
    // }

    return {
      schema,
      toast,
      // onSubmit
    };
  },
  methods: {
    sendEmail: function(e) {
     console.log(e)
      emailjs
        .send(
          "service_ducx66m",
          "template_pap7zau",
          e,
          "user_jpmayVYOD7Ud2zRQ23MFc"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            this.toast.success("Email successfully sent!", {
              toastClassName: "notification-class",
            });
          },
          (error) => {
            console.log("FAILED...", error);
            this.toast.error(
              "Failed to send e-mail! Please reach out to martin@glacierhub.io directly using your e-mail client.",
              { toastClassName: "notification-error-class" }
            );
          }
        );
    },
  },
};
</script>

<style lang="scss">
.text {
  font-size: 0.7rem;
}

.warning-text-input {
  font-size: 0.5rem;
  color: darkred;
  padding: 0px;
}

.text-area-input {
  height: 175px;
  padding: 0px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.input {
  margin-top: 10px;
}

.Vue-Toastification__toast--success.notification-class {
  
  background-image: linear-gradient(90deg, (#1d976c, #93f9b9));
}

.Vue-Toastification__toast--error.notification-error-class {
  
  background-image: linear-gradient(90deg, (#93291e, #ed213a));
}

.btn-contact {
  border: none;
  background: none;
  outline: none;
  margin: 0px 26px;
}

a {
  &:active {
    border: none;
    background: none;
    outline: none;
  }
}

form {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}
</style>