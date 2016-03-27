(function(){
	"use strict";

	KC3StrategyTabs.databackup = new KC3StrategyTab("databackup");

	KC3StrategyTabs.databackup.definition = {
		tabSelf: KC3StrategyTabs.databackup,
		/* INIT
		Prepares all data needed
		---------------------------------*/
		init :function(){

		},


		/* EXECUTE
		Places data onto the interface
		---------------------------------*/
		execute :function(){
			var sav=false;
      $(".tab_databackup .processDisplay").hide();

			$(".tab_databackup .export_data").on("click", function(){
				sav = true;
				$(".tab_databackup .dataselect").hide();
				$(".tab_databackup .processDisplay").show();
				window.KC3DataBackup.saveData(".tab_databackup .processDisplay .processText",function(){
						alert("finished!");
						$(".tab_databackup .dataselect").show();
						$(".tab_databackup .processDisplay").hide();
				});
			});

			$(".tab_databackup .merge_data").on("click", function(){
				if(filename===""){
					alert("no file selected");
					return;
				}
				if(confirm("are you sure?"))
					window.KC3DataBackup.loadData(filename,false);
			});

			$(".tab_databackup .warningbtn").on("click", function(){
				$(".tab_databackup .warning").toggle();
			});

			$(".tab_databackup .overwrite_data").on("click", function(){
				if(confirm("You will overwrite all your kc3 data! are you sure?"))
				{
					if(filename==="")
						alert("no file selected");
					else
						if(sav||confirm("You didn't backup your data! are you sure?"))
                        {
                            $(".tab_databackup .dataselect").hide();
                            $(".tab_databackup .processDisplay").show();
                            window.KC3DataBackup.loadData(filename,true,".tab_databackup .processDisplay .processText",function(){
                                alert("finished!");
                                $(".tab_databackup .dataselect").show();
                                $(".tab_databackup .processDisplay").hide();
                            });
                        }
				}
			});

			var filename="";
			//window.KC3DataBackup.loadData(event.target.files[0]);
			$(".tab_databackup .import_file").on("change", function(event){
				filename = event.target.files[0];
			});
		}
	};

})();
