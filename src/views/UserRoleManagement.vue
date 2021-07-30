<template>
  <v-container class="user-roles-container">
    <h1 class="font-weight-regular text--disabled mb-6">User Roles Management</h1>
    <v-row>
      <v-col>
        <v-text-field
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          :items="roleStatusOptions"
          label="Role Status"
        ></v-select>
      </v-col>
      <v-col class="text-right">
        <v-btn
          depressed
          color="primary"
        >
          Create new role
        </v-btn>
      </v-col>
    </v-row>
    <div class="user-roles-items">
      <user-role-item
        v-for="role in getAllRoles"
        :key="role.id"
        :item="role"
      />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import UserRoleItem from './UserRoleItem.vue';

export default {
  name: 'UserRoleManagement',
  components: {
    UserRoleItem
  },
  computed: {
    ...mapGetters(['getAllRoles'])
  },
  data() {
    return {
      roleStatusOptions: ['Active', 'Inactive', 'Active and Inactive']
    }
  }
}
</script>

<style>
.user-roles-container {
  background: white;
  margin-top: 28px;
  padding: 40px;
  height: 90vh;
}
.user-roles-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
</style>
