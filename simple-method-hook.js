Java.perform(()  => {
    console.log("Running...");
    // Call the implementation to overload a function
    Java.enumerateLoadedClasses((clazz) => {
        console.log(clazz);
    })
});