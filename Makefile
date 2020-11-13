CFLAGS:=--std=c++1z -O2 -fPIC -DGNU_GCC -D_GNU_SOURCE -D_GLIBCXX_USE_CXX11_ABI=0 -DBOOST_DISABLE_ASSERTS
LDFLAGS:=-Wl,-E -Wl,--hash-style=gnu
ROOTLIBS:=-lCore -lRIO -lNet -lHist -lMatrix -lThread -lTree -lMathCore -lGpad -lGraf3d -lGraf -lPhysics -lPostscript -lASImage
INCLUDE=-I. -I$(ROOT_ROOT)/include -I$(BOOST_ROOT)/include
LIBDIR=-L./build/lib -L$(shell echo $(LD_LIBRARY_PATH) | sed 's|:| -L|g')
OTHERLIBS:=-ldl -ljpeg -lpng
DQMRenderPlugins_src:=$(wildcard plugins/*.cc)
DQMRenderPlugins_obj:=$(addprefix build/objs/, $(addsuffix .o,$(DQMRenderPlugins_src)))

all: lib/renderplugin.so bin/render lib/libDQMRenderPlugins.so
	@echo All build

objs/src/%.cc.o: src/%.cc
	@mkdir -p $(@D)
	g++ -c $(CFLAGS) $(INCLUDE) -o $@ $<

objs/plugins/%.cc.o: plugins/%.cc
	@mkdir -p $(@D)
	g++ -c $(CFLAGS) -O3 $(INCLUDE) -o $@ $<

lib/renderplugin.so: objs/src/DQMRenderPlugin.cc.o
	@mkdir -p $(@D)
	g++ --shared -Wl,-E -Wl,-z,defs $(LDFLAGS) $(LIBDIR) $(ROOTLIBS) $(OTHERLIBS) $< -o $@

bin/render: lib/renderplugin.so objs/src/render.cc.o
	@mkdir -p $(@D)
	g++ $(LDFLAGS) $(LIBDIR) $(ROOTLIBS) $(OTHERLIBS) objs/src/render.cc.o -o $@ lib/renderplugin.so -lstdc++fs

lib/libDQMRenderPlugins.so: $(addprefix objs/,$(addsuffix .o,$(wildcard plugins/*.cc)))
	@mkdir -p $(@D)
	g++ $(CFLAGS) -O3 --shared $? -o $@

clean:
	rm -rf objs lib bin
