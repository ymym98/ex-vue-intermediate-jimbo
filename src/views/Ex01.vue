<template>
  <div class="main">
    <div>
      <h1>野球チーム一覧</h1>
    </div>
    <div v-for="team of teams" v-bind:key="team.id">
      <router-link v-bind:to="'/teamDetail/' + team.id">
        {{ team.teamName }}
      </router-link>
    </div>
    <!-- <tr v-for="employee of employees" v-bind:key="employee.id">
              <td>
                <router-link v-bind:to="'/employeeDetail/' + employee.id">
                  {{ employee.name }}
                </router-link> -->
  </div>
</template>

<script lang="ts">
import { Team } from "@/types/Team";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BaseballList extends Vue {
  get teams(): Array<Team> {
    return this["$store"].getters.getTeams;
  }
}
</script>

<style></style>
