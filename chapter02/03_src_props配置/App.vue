<template>
  <div>
    <Student name="张姣妮" sex="女" :age="18"/>
    <hr>
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    Student
  }
}
</script>


