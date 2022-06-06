<script>
  export default {

  }
</script>

<template>
  <div class="column column-50">
    <div class="panel-item">

      <!-- Title -->
      <div class="row panel-title">
        <h3>
          Links
          <i class="bi-pencil-square panel-title-icon"></i>
        </h3>
      </div>

      <div class="row panel-items">

        <div class="column column-50 column-item">
          <div class="panel-col">
            <p class="item-single-title">
              <span class="item-desc"><i class="bi-router-fill item-icon"></i>&nbsp;Router</span>
              <span class="item-status"><i class="bi-reception-4"></i></span>
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style lang="scss">
  .panel-item {
    background: #192024;
    border-radius: 7px;
    padding: 15px 15px;
    overflow: hidden;

    button { margin: 0; }
    p { margin: 0; }

    h3 {
      width: 100%;
      padding-bottom: 10px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      border-bottom: solid 1px #2D353D;
      font-size: 20px;
      color: #fff;
      letter-spacing: normal;

      .panel-title-icon {
        float: right;
        color: #66707A;
        font-size: 20px;
      }
    }

    .column-item {
      padding: 0;
    }

    .panel-items {
      flex-wrap: wrap;

      .panel-col {
        background: #2D353D;
        border-radius: 7px;
        padding: 7px 15px;
        margin: 7px 10px;
      }

      p.item-single-title {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .item-desc {
          display: flex;
          align-items: center;
        }

        .item-icon {
          color: #66707A;
          font-size: 24px;
          margin-right: 5px;
        }

        span.item-status {
          color: #10B981;
        }
      }
    }
  }
</style>