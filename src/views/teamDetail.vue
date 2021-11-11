<template>
  <div>
    <div>
      <strong>球団名</strong><br />
      {{ currentTeam.teamName }}
    </div>
    <div>
      <strong>本拠地</strong><br />
      {{ currentTeam.headquarters }}
    </div>
    <div>
      <strong>発足日</strong><br />
      {{ currentTeam.formatInauguration }}
    </div>
    <div>
      <strong>歴史</strong>
      <pre> {{ currentTeam.history }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/Team";

@Component
export default class teamDetail extends Vue {
  private currentTeam!: Team;

  /**
   *  VuexストアのGetter経由で受け取ったリクエストパラメータのIDから1件の
   * 野球チーム情報を取得する
   */
  created(): void {
    const teamId = parseInt(this["$route"].params.id);

    this.currentTeam = this["$store"].getters.getTeamById(teamId);
  }
}
</script>

<style></style>
