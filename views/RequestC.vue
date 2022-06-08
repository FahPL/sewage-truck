<template>
<div>
  <v-app-bar dark height="200px" color="#04B640" class="" style="border-radius:0px 0px 125px 125px " >
      <v-toolbar-title style="margin-left:30px; padding: auto;" class="text-h5 yexy-center">บริการเรียกใช้รถขนสิ่งปฏิกูล</v-toolbar-title>

      
      
    </v-app-bar>
     <v-icon
          color="#08782E"
          class="mr-5"
          x-large
          @click="backmain"
        >
          mdi-arrow-left
        </v-icon>
    <v-container>
        <v-card color="#04B640">
        <v-card-text class="text--primary" >
                  <div>
                    <p class="font-weight-bold text-center text-h3" >ข้อมูลรถขนสิ่งปฏิกูล</p>
                  </div>
                  <v-spacer></v-spacer>
                  <div>
                    <p class="font-weight-bold">หน่วยงาน/ชื่อผู้ประกอบการรถขนสิ่งปฏิกูล : {{requestcar.namecar}}</p>
                    <p class="font-weight-bold">หมายเลขอนุญาต : {{ requestcar.licensenumber}}</p>
                    <p class="font-weight-bold">อนุญาตโดย : {{requestcar.allowedby}}</p>
                    <p class="font-weight-bold">ที่อยู่ : {{requestcar.addpeople}} ตำบล {{requestcar.สันทรายหลวง}} 
                    อำเภอ {{requestcar.area}} จังหวัด {{requestcar.province}} {{requestcar.postalcode}}</p>
                    <p class="font-weight-bold">โทรศัพท์ : {{requestcar.telcar}}</p>
                    <p class="font-weight-bold">ทะเบียนรถ : {{requestcar.carregistration}}</p>
                    <p class="font-weight-bold">ชื่อพนกงานขับรถ : {{requestcar.drivername}}</p>
                    <p class="font-weight-bold">โทรศัพท์ : {{requestcar.drivertel}}</p>
                    <p class="font-weight-bold">ชื่อพนักงานเก็บขน : {{requestcar.portername}}</p>
                    <p class="font-weight-bold">โทรศัพท์ : {{requestcar.portertel}}</p>
                    
                  </div>
                </v-card-text>
                <div >
                    <p class="font-weight-bold text-center">ภาพรถขนสิ่งปฏิกูล :</p>
                    <v-card width="250" height="150" class="text-center">
                      <v-avatar
                class="ma-10 mr-4 text-center mx-auto"
                tile
                
              >
                <img src="@/assets/1.png" />
              </v-avatar>
                    </v-card>
                    
                  </div>
    </v-card>
   
    </v-container>
    
</div>
</template>

<script>
export default {
  data: () => ({
    requestcar: {
        namecar: "ส.ส้วมสุขสันต์", 
        licensenumber: "845-845-8459",
        allowedby: "อบต.สันทรายหลวง",
        addpeople: "359 ม.4 ",
        subarea: "สันทรายหลวง",
        area: "สันทราย",
        province: "เชียงใหม่",
        postalcode: "58000",
        telcar: "065-6588598",
        carregistration:"บน-5864 เชียงใหม่",
        drivername: "นายชัย คำ",
        drivertel: "068-5948621",
        portername: "นายสุข เสมอ",
        portertel: "098-5986589",

        

      },

  }),
  methods: {
    
    backmain(){
      this.$router.push("/2")
    },
  }
  };
</script>