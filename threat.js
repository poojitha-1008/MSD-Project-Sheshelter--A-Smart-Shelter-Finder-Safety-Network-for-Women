        // Form submission handling
        document.getElementById('threatReportForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would send this data to your server
            // For demo purposes, we'll just show the confirmation
            document.getElementById('reportConfirmation').style.display = 'block';
            document.getElementById('threatReportForm').style.display = 'none';
            
            // Scroll to confirmation
            document.getElementById('reportConfirmation').scrollIntoView({ behavior: 'smooth' });
            
            // Reset form (optional)
            setTimeout(() => {
                document.getElementById('threatReportForm').reset();
                document.getElementById('reportConfirmation').style.display = 'none';
                document.getElementById('threatReportForm').style.display = 'grid';
            }, 5000);
        });