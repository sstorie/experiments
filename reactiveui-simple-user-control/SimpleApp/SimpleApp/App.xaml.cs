using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Windows;
using Autofac;
using ReactiveUI;
using ReactiveUI.Autofac;
using SimpleApp.ViewModels;
using Splat;

namespace SimpleApp
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        public App()
        {
            var assembly = Assembly.GetExecutingAssembly();
            var builder = new ContainerBuilder();

            // Since we're using the ReactiveUI.Autofac library this is all we need to do
            //  to wire up our views and view models. Since it's based on Autofac we can
            //  also freely inject any dependencies we've registered.
            //
            builder.RegisterForReactiveUI(assembly);
            RxAppAutofacExtension.UseAutofacDependencyResolver(builder.Build());

            // We've replaced Splat's default locator with the Autofac version so
            //  we can continue to use the code shown in the ReactiveUI examples
            //
            var view = (Views.MainWindow)Locator.CurrentMutable.GetService(typeof(IViewFor<MainWindowViewModel>));
            view.Show();
        }
    }
}
