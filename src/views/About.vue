<template>
  <NavigationBar></NavigationBar>
  <main>
    <h1>About</h1>
    <div class="space-y-4">
      <p>
        In partial fulfillment for <span class="text-primary underline">IT 009 - Systems Integration and Architecture
        1</span> for the <span class="text-primary underline">Information Technology</span> program.
      </p>
      <p>
        The Information Technology program is focused on the utilization of
        computers and computer software to plan, install, customize, operate,
        manage, administer and maintain information technology systems.
      </p>
      <p>
        The program prepares students to be IT professionals who are well versed
        in application installation, operation, development, maintenance and
        administration; as well as familiar with hardware installation,
        operation, and maintenance.
      </p>
    </div>
  </main>
</template>

<script>
import NavigationBar from "@/components/Navigation";
export default {
  components: { NavigationBar },
};
</script>
