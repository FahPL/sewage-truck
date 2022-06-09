<template>
  <v-card>
    <v-app-bar dark height="200px" color="#04B640" class="" style="border-radius:0px 0px 125px 125px " >
      <v-toolbar-title style="margin-left:30px; padding: auto;" class="text-h5">บริการเรียกใช้รถขนสิ่งปฏิกูล</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-icon
          dark
          class="mr-5"
          style="margin-right: auto"
          x-large
           @click="profilet"
        >
          mdi-account-cog
        </v-icon>
      
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col cols="12" class="mgt">
          <v-card color="#04B640" dark class="pa-4 text-no-wrap rounded-xl" @click="gorequestp">
            <div class="d-flex align-center">
              <div class="col-7">
                <!-- <v-card-title></v-card-title> -->

                <v-card-title class="text-h4 mb-10 mt-10">
                  คำร้องขอจากครัวเรือน
                </v-card-title>
              </div>
              <v-spacer></v-spacer>
              <v-avatar
                class="ma-10 mr-5 text-right mx-auto"
                tile
                width="150"
                height="100"
              >
                <img src="@/assets/1.png" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" class="mt-6">
          <v-card color="#04B640" dark class="rounded-xl" @click="gorequests">
            <div class="d-flex justify-center mb-6">
              <v-card-title class="text-h4 mb-15 mt-15">
                เรียกใช้บริการสถานที่กำจัด
              </v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" class="mb-10">
          <v-card color="#04B640" dark class="rounded-xl">
            <div class="d-flex justify-center mb-6">
              <v-card-title class="text-h4 mb-15 mt-15">
                ประวัติการเรียกใช้บริการ
              </v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    gorequestp(){
      this.$router.push("/requestp")
    },
    gorequests(){
      this.$router.push("/selects")
    },
    profilet(){
      this.$router.push("/profilet")
    },
  }
};
</script>
 