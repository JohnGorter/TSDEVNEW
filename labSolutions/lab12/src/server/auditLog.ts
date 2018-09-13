export const auditLog: MethodDecorator =
    (target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> => {
        console.log(`Registering logMethod for ${target.constructor.name}${propertyKey}`);

        return {
            value: function (...args: any[]) {
                console.log(`[auditLog]: ${propertyKey}.apply(${JSON.stringify(args)})`);
                return descriptor.value.apply(this, args);
            }
        };
    }
