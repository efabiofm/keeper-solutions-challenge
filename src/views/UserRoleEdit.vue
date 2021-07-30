<template>
  <v-container class="user-roles-container">
    <h1 class="font-weight-regular text--disabled mb-6">User Role</h1>
    <v-snackbar
      top
      v-model="snackbar"
    >
      Role created succesfully
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          small
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-form ref="userRoleForm" v-model="valid">
      <v-text-field
        v-model="item.name"
        label="Role name"
        required
        :rules="rules"
      ></v-text-field>
      <v-text-field
        v-model="item.type"
        label="Role type"
        required
        :rules="rules"
      ></v-text-field>
      <v-textarea
        v-model="item.description"
        label="Role description"
        required
        :rules="rules"
      ></v-textarea>
      <div class="d-flex">
        <v-switch
          v-model="item.editable"
          class="mr-8"
          inset
          label="Editable"
        ></v-switch>
        <v-switch
          v-model="item.inactive"
          inset
          label="Inactive"
        ></v-switch>
      </div>
      <div class="text-right">
        <v-btn
          depressed
          color="primary"
          @click="submit"
        >
          Save
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import moment from 'moment';

export default {
  data() {
    return {
      item: {
        images: [],
        dateCreated: moment().format('DD/MM/YYYY')
      },
      valid: false,
      rules: [
        v => !!v || 'This field is required'
      ],
      snackbar: false
    }
  },
  methods: {
    submit() {
      this.$refs.userRoleForm.validate();
      if (this.valid) {
        this.addRole(this.item)
        this.snackbar = true;
      }
    },
    ...mapMutations(['addRole'])
  }
}
</script>
