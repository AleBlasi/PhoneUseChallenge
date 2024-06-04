document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('table-container');
    
    Papa.parse('number_of_coffees.csv', {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data;
            let table = '<table class="table table-striped">';
            table += '<thead><tr>';
            
            // Add table headers
            Object.keys(data[0]).forEach(function(key) {
                table += `<th>${key}</th>`;
            });
            table += '</tr></thead><tbody>';
            
            // Add table rows
            data.forEach(function(row) {
                table += '<tr>';
                Object.values(row).forEach(function(value) {
                    table += `<td>${value}</td>`;
                });
                table += '</tr>';
            });
            table += '</tbody></table>';
            container.innerHTML = table;
        }
    });
});
