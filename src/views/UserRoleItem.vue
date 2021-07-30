<template>
  <div>
    <v-card outlined>
      <div class="text-right inactive-container">
        <v-chip
          v-if="item.inactive"
          class="mt-4 mr-4"
          color="error"
          label
          text-color="white"
          small
        >
          Inactive
        </v-chip>
      </div>
      <v-card-title class="pt-0">
        {{ item.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ item.type }}
      </v-card-subtitle>
      <v-card-text class="mb-6">
        <div class="text--secondary mb-2">
          {{ item.description }}
        </div>
        <v-avatar
          v-for="(img, i) in item.images.slice(0, 6)"
          class="mr-1"
          size="40"
          :key="i"
        >
          <img :src="img">
        </v-avatar>
        <v-avatar
          v-if="item.images.length > 6"
          color="grey"
          class="white--text"
          size="40"
        >
          +{{item.images.length - 6}}
        </v-avatar>
      </v-card-text>
      <v-card-actions class="grey lighten-3 actions-container pl-4">
        <small
          class="text--disabled">
          <span v-if="item.lastUpdate">Last update: {{ item.lastUpdate }}</span>
          <span v-else>Date created: {{ item.dateCreated }}</span>
        </small>
        <v-spacer></v-spacer>
        <div v-if="item.editable">
          <v-btn
            small
            text
            @click="editRole"
          >
            Edit
          </v-btn>
          <v-btn
            small
            text
            color="error"
          >
            Delete
          </v-btn>
        </div>
        <div v-else>
          <v-icon small color="grey">mdi-lock</v-icon>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    editRole() {
      this.$router.push({ name: 'UserRoleEdit', params: { id: this.item.id } })
    }
  },
  props: {
    item: Object
  }
}
</script>

<style>
.actions-container {
  height: 48px;
}
.inactive-container {
  height: 40px;
}
</style>