positioner: function (labelWidth, labelHeight, point) {
      const chartWidth = this.chart.chartWidth;
      const chartHeight = this.chart.chartHeight;
      let tooltipX = point.plotX + this.chart.plotLeft + 10;
      let tooltipY = point.plotY + this.chart.plotTop - 10;

      // Adjust if tooltip goes beyond the right boundary
      if (tooltipX + labelWidth > chartWidth) {
        tooltipX -= (tooltipX + labelWidth) - chartWidth + 10;
      }

      // Adjust if tooltip goes beyond the bottom boundary
      if (tooltipY + labelHeight > chartHeight) {
        tooltipY -= (tooltipY + labelHeight) - chartHeight + 10;
      }

      // Prevent tooltip from going outside the left boundary
      if (tooltipX < 0) {
        tooltipX = 10;
      }

      // Prevent tooltip from going above the top boundary
      if (tooltipY < 0) {
        tooltipY = 10;
      }

      return {
        x: tooltipX,
        y: tooltipY,
      };
    },
