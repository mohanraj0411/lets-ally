<template>
  <div class="contact-form">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="form-heading-col">
            <h2 class="h2 text-white">Contact us</h2>
          </div>
          <div class="form-heading-col hom">
            <h3 class="h3 text-white">Let's chat.<br>Connect with CMA and see what we can do for you.</h3>
          </div>
        </div>
        <div class="col-6">
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-6">
              <label for="inputFirstname" class="form-label">First name</label>
              <input type="text" class="form-control" id="inputFirstname" required/>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter First name.</div>
            </div>
            <div class="col-md-6">
              <label for="inputLast-name" class="form-label">Last name</label>
              <input type="text" class="form-control" id="inputLast-name" required/>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter Last name.</div>
            </div>
            <div class="col-md-6">
              <label for="inputEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail" required/>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter email address.</div>
            </div>
            <div class="col-md-6 optional">
              <label for="Company" class="form-label">Company</label>
              <input type="text" class="form-control" id="Company" />
            </div>
            <div class="col-md-12 optional">
              <label for="Message" class="form-label">Message (optional)</label>
              <input
                type="text"
                class="form-control message"
                id="Message"
                maxlength="256"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn" @click="formValidate()">Make a Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    formValidate() {
      var forms = document.querySelectorAll('.needs-validation')
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
    }
  }
};
</script>

<style lang="scss">
.contact-form {
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: #0f1010;

  .row > * {
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
  }

  .form-label {
    color: #f8fbfc;
  }

  .form-control {
    background-color: transparent;
    color: #f8fbfc;
    border-width: 0;
    border-bottom-width: 1px;
    border-radius: 0;
    border-color: #000 #000 #f8fbfc;

    &.message {
      height: 142px;
      max-width: none;
      padding-top: 113px;
    }
  }

  .was-validated .optional .form-control:valid {
    background-image: none;
    border-color: #ced4da;
  }
}
</style>