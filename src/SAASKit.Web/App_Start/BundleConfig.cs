using System;
using System.Web;
using System.Web.Optimization;

namespace SAASKit.Web
{
    public class BundleConfig
    {

        public static void AddDefaultIgnorePatterns(IgnoreList ignoreList)
        {
            if (ignoreList == null)
                throw new ArgumentNullException("ignoreList");
            ignoreList.Ignore("*.intellisense.js");
            ignoreList.Ignore("*-vsdoc.js");
            ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
            //ignoreList.Ignore("*.min.js", OptimizationMode.WhenDisabled);
            //ignoreList.Ignore("*.min.css", OptimizationMode.WhenDisabled);
        }

        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();
            AddDefaultIgnorePatterns(bundles.IgnoreList);

            bundles.Add(new ScriptBundle("~/bundles/theme").Include(
                		"~/js/jquery-{version}.min.js",
                        "~/js/jquery-migrate-{version}.min.js",
                        "~/js/jquery-ui-{version}.custom.min.js",
	                    "~/js/jquery.ui.touch-punch.js",
	                    "~/js/modernizr.js",
	                    "~/js/bootstrap.min.js",
	                    "~/js/jquery.cookie.js",
	                    "~/js/fullcalendar.min.js",
	                    "~/js/jquery.dataTables.min.js",
	                    "~/js/dataTables.bootstrap.min.js",
	                    "~/js/excanvas.js",
	                    "~/js/jquery.flot.js",
	                    "~/js/jquery.flot.pie.js",
	                    "~/js/jquery.flot.stack.js",
	                    "~/js/jquery.flot.resize.min.js",
	                    "~/js/jquery.flot.time.js",
	                    "~/js/jquery.chosen.min.js",
	                    "~/js/jquery.uniform.min.js",	
	                    "~/js/jquery.cleditor.min.js",
	                    "~/js/jquery.noty.js",
	                    "~/js/jquery.elfinder.min.js",
	                    "~/js/jquery.raty.min.js",
	                    "~/js/jquery.iphone.toggle.js",
	                    "~/js/jquery.uploadify-3.1.min.js",
	                    "~/js/jquery.gritter.min.js",
	                    "~/js/jquery.imagesloaded.js",
	                    "~/js/jquery.masonry.min.js",
	                    "~/js/jquery.knob.modified.js",
	                    "~/js/jquery.sparkline.min.js",
	                    "~/js/counter.min.js",
	                    "~/js/raphael.2.1.0.min.js",
                        "~/js/justgage.1.0.1.min.js",
	                    "~/js/jquery.autosize.min.js",
	                    "~/js/retina.js",
	                    "~/js/jquery.placeholder.min.js",
	                    "~/js/wizard.min.js",
	                    "~/js/core.min.js",
	                    "~/js/charts.min.js",
	                    "~/js/custom.min.js"));

 bundles.Add(new StyleBundle("~/Content/css").Include(
                	    "~/css/bootstrap.min.css",
	                    "~/css/style.min.css",
	                    "~/css/retina.min.css"
                ));
        }
    }
}